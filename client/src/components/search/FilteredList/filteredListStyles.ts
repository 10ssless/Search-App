import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        list: {
            height: "80vh",
            overflow: "scroll",
        },
        noResults: {
            padding: theme.spacing(2),
        },
        selected: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        }
    })
);

export default useStyles;