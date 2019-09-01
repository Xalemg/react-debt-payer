const styles = theme => ({
    container: {
        paddingLeft: "64px",
    },
    debtPaper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        textAlign: 'left',
    }, 
      title: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        textAlign :'left'
      },
      header: {
       height:"230px",
        padding: "10px",
      },
      summary: {
        height:"230px",
         padding: "50px",
       },
})
export default styles;