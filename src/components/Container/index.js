import Styles from './Container.module.css'
import propTypes from "prop-types"


const Container = (props) =>{
    return(
        <section className={Styles.container}>
            {props.children}
        </section>
    )
}
Container.propTypes ={
    children : propTypes.node
}
export default Container