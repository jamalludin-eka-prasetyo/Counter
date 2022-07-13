import PropTypes from "prop-types"
import Styles from "./Form.module.css"

const Form = (props) =>{
    return (
    <form className={Styles.form} onSubmit={props.onSubmit}>
        <input 
        onChange={props.onChange}
        value={props.value}
        className={Styles.input}
        type="text" 
        placeholder='List'
      />
      <button className={Styles.addButton} type='submit'>add</button>
    </form>
    )
}
    Form.propTypes = {
        // handle form
        onsubmit : PropTypes.func,
        onchange : PropTypes.func,
        value : PropTypes.string
    }



export default Form