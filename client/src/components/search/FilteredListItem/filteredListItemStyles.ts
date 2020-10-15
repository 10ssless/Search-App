import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        selected: {
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
        }
    })
);

export default useStyles;