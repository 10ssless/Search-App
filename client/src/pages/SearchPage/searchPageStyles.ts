import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { currentColorFromTheme } from "app/helpers";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
        },
        inputFont: {
            fontSize: 30,
            color: theme.palette[currentColorFromTheme(theme.palette.type)].main,
        },
        searchBar: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        title: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    })
);

export default useStyles;