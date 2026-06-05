import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { IconButton } from "@mui/material";

export default function History() {
    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([]);
    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const res = await getHistoryOfUser();

                console.log("HISTORY:", res);

                setMeetings(res || []);
            } catch (err) {
                console.log("Error fetching history:", err);
                setMeetings([]);
            }
        };

        fetchHistory();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    return (
        <div className="History"style={{ padding: "20px" }}>
            <IconButton onClick={() => routeTo("/home")}>
                <HomeIcon sx={{ fontSize: 35 }}/>
            </IconButton>

            {meetings.length > 0 ? (
                meetings.map((e, i) => (
                    <Card key={e._id || i} variant="outlined" style={{ marginTop: "10px" }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                Code: {e.meetingCode}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Date: {formatDate(e.date)}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <p style={{ textAlign: "center", marginTop: "20px" }}>
                    No history found
                </p>
            )}
        </div>
    );
}