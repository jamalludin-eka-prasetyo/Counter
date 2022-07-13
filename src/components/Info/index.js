import propTypes from "prop-types"
import Styles from "./Info.module.css"

const Info = ({ todosLength, totalCount, deleteTodos }) => {
    return (
    <div className={Styles.info}>
      <div className={Styles.infoTotal}>
        <p>{`Total List: ${todosLength}`} </p>
      </div> 
      <div className={Styles.infoTotal}>
        <p>{`Total Counts: ${totalCount} `} </p>
      </div>
      <button className={Styles.deleteButton} onClick={deleteTodos}>
        Delete All List
      </button>
    </div>
    )
}

Info.prototype = {
    todosLength : propTypes.number,
    totalCount  : propTypes.func,
    deleteTodos : propTypes.func
}

export default Info