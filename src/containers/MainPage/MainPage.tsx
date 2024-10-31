import {useCallback, useEffect, useState} from "react";
import axiosAPI from "../../axiosAPI.ts";
import {IContent, IContentAPI} from "../../types";
import {Alert, Button, Card, CardContent, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {NavLink, useParams} from "react-router-dom";


const MainPage = () => {
    const [contents, setContents] = useState<IContent[]>([]);
    const { pageName } = useParams<{ pageName: string }>();



    const fetchData = useCallback(async () => {
        try {
            const response = await axiosAPI.get<IContentAPI>('/pages.json');
            const contentsObject: IContentAPI = response.data;

            if (contentsObject && contentsObject[pageName]) {
                setContents([{
                    id: pageName,
                    title: contentsObject[pageName].title,
                    content: contentsObject[pageName].content,
                }]);
            }
        } catch (error) {
            console.error(error);
        }
    }, [pageName]);

    useEffect(() => {
        void fetchData();
    }, [fetchData]);


    return (
        <>
            <Typography
                variant="h4"
                sx={{ mb: 2, textAlign: "center", color: "#000" }}
            >
                Contents
            </Typography>
            {contents.length === 0 ? (
                <Alert severity="info">
                    There are no contents yet!
                </Alert>
            ) : (
                <Grid container spacing={2}>
                    {contents.map((c) => (
                        <Grid size={12} key={c.id}>
                            <Card
                                sx={{
                                    minWidth: 275,
                                    backgroundColor: "inherit",
                                    border: "3px solid",
                                    borderRadius: "10px",
                                    p: 1,
                                }}
                            >
                                <CardContent
                                    sx={{
                                        backgroundColor: "white",
                                        border: "1px solid  #9e9e9e",
                                        borderRadius: "10px",
                                        mb: 1,
                                    }}
                                >
                                    <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                                        {c.title}
                                    </Typography>
                                    <hr />
                                    <Typography sx={{ fontSize: 16, marginBottom: 2 }}>
                                        {c.content}
                                    </Typography>
                                    <Button component={NavLink}
                                            to={`/pages/admin/${c.id}`}
                                            variant="contained">
                                        Edit
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default MainPage;