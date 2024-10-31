import { Button, MenuItem, Select, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useEffect, useState } from "react";
import axiosAPI from "../../axiosAPI.ts";
import { useNavigate, useParams } from "react-router-dom";

const EditContent = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const fetchPagesList = async () => {
    try {
      const response = await axiosAPI.get("/pages.json");
      return Object.keys(response.data);
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const fetchContent = async (page: string) => {
    try {
      const response = await axiosAPI.get(`/pages.json`);
      const data = response.data;
      if (data[page]) {
        setTitle(data[page].title);
        setContent(data[page].content);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadPages = async () => {
      const pages = await fetchPagesList();
      setPagesList(pages);
      if (id && pages.includes(id)) {
        setSelectedPage(id);
        void fetchContent(id);
      }
    };
    void loadPages();
  }, [id]);

  useEffect(() => {
    if (selectedPage) {
      void fetchContent(selectedPage);
    }
  }, [selectedPage]);

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axiosAPI.put(`/pages/${selectedPage}.json`, { title, content });
      navigate(`/pages/${selectedPage}`);
    } catch (error) {
      console.error(error);
    }
  };

  const [pagesList, setPagesList] = useState<string[]>([]);

  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: 2, textAlign: "center", color: "#000" }}
      >
        {selectedPage ? "Edit Content" : "Select Page"}
      </Typography>
      <form onSubmit={onSubmitForm}>
        <Grid
          container
          spacing={2}
          sx={{
            mx: "auto",
            width: "60%",
            border: "3px solid #000",
            borderRadius: "10px",
            p: 4,
          }}
        >
          <Grid size={12}>
            <Select
              fullWidth
              labelId="page-select"
              id="page-select"
              value={selectedPage || ""}
              onChange={(e) => setSelectedPage(e.target.value)}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Select category
              </MenuItem>
              {pagesList.map((page) => (
                <MenuItem key={page} value={page}>
                  {page}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          {selectedPage && (
            <>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  fullWidth
                  label="Content"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Grid>
            </>
          )}
          <Grid size={12} sx={{ textAlign: "center", mt: 2 }}>
            <Button size="large" type="submit" variant="contained">
              Edit
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default EditContent;
