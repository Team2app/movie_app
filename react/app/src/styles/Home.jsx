import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";
import Image from "../images/brandBanner.jpeg";

export const useStyles = makeStyles((theme) => ({
    HeardeWraper: {
        width: "100%",
        minHeight: "90vh",
        height: "auto",
        background: `linear-gradient(to bottom right,#04303140, #00606473),url(${Image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    Headercontaier: {
        width: "85%",
        minHeight: "100vh",
        height: "auto",
        padding: "20px",
        color: Theme.colors.base2,
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        fontFamily: "roboto",
    },
    headerTitle: {
        fontSize: "3rem",
        margin: theme.spacing(1, 0),
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
            fontSize: "2rem",
        },
    },
    headerDesc: {
        fontSize: "2rem",
        margin: theme.spacing(1, 0),
        textAlign: "left",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.5rem",
            margin: theme.spacing(2, 0),
        },
    },

    //decorator.
    decorator: {
        display: "flex",
        fontWeight: "bolder",
        fontFamily: "roboto",
        position: "relative",
        marginLeft: "20px",
        "&:before": {
            width: "40px",
            height: "40px",
            backgroundColor: Theme.colors.primary,
            content: '""',
            borderRadius: "50%",
        },
    },
    decoratorText: {
        lineHeight: "40px",
        position: " absolute",
        left: "20px",
    },

    arrow: {
        lineHeight: "40px",
        position: " absolute",
        left: "95px",
        margin: "auto"
    },
}
));