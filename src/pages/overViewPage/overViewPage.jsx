import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { listDebts } from '../../redux/actions/debts/listDebts';
import {connect} from 'react-redux'

export class overViewPage extends React.Component {


  componentDidMount =() => {

      this.props.listDebts(this.props.user.token)
    
  }


  render() {
    return (
      JSON.stringify(this.props.debts)
    )
  }
}
const mapStateToProps = state => {
  return {
   debts: state.debts,
   user: state.user
  }
}
export default withStyles(null, { withTheme: true })(connect(mapStateToProps, {listDebts})(overViewPage))