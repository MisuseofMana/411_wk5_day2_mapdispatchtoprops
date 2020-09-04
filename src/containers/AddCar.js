import { connect } from 'react-redux'
import AddCar from '../components/AddCar'
import { addCar, removeCar } from '../redux/actions'
import { bindActionCreators } from 'redux'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addCar, removeCar }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddCar)