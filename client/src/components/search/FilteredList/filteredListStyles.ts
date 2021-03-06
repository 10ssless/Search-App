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
    })
);

export default useStyles;