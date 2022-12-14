import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@material-ui/core";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

const EmailRow = ({ id, title, description, subject, time }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMail({
                id,
                title,
                description,
                subject,
                time,
            })
        );
        navigate("/mail");
    };
    return (
        <div className="emailRow" onClick={openMail}>
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className="emailRow__title">{title}</h3>
            <div className="emailRow__message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow__description">
                        - {description}
                    </span>
                </h4>
            </div>
            <p className="emailRow__time">{time}</p>
        </div>
    );
};

export default EmailRow;
