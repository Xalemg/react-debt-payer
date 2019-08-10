import { makeStyles } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop:"10px",
      paddingLeft: "1%",
      paddingRight: "1%",
      paddingBottom: "5px"
    },
    green: {
      backgroundColor: green[100],
      '&:hover': {
        backgroundColor:  green[200],
      },
    },
    red: {
      backgroundColor:  red[100],
      '&:hover': {
        backgroundColor: red[200],
      },
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    details: {
      alignItems: 'center',
    },
    column: {
      flexBasis: '33.33%',
    },
    buttons_box: {
      flexBasis: '66.66%',
    },
    button: {
      margin: '1%',
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2),
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }));
  export default useStyles;