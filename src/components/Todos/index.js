import propTypes from "prop-types"
import minusIcon from "../../assets/minus-icon.svg"
import plusIcon from "../../assets/plus-icon.svg"
import Styles from "./Todos.module.css"
import classNames from "classnames"


const Todos = (props) => {
    return (
        <div className={Styles.todos}>
        {props.todos.map((todo, index, arr) => {
          return(
            <div key={index} 
            // className={`todo ${!(arr.length === index +1) && 'todo-divider'}`}
            className={classNames(Styles.todo,{
                [Styles.todoDivider] : !(arr.length === index +1)
            })}
            >
              {todo.title}
              {/* wrapper button + dan - */}
              <div className={Styles.todoIconWraper}>
                <div className={Styles.todoCount}>{todo.count}</div>

                <button className={Styles.todoActionButton}>
                  <img onClick={()=> props.Minus(index)} src={minusIcon} alt="minus icon" />
                </button>
                <button className={Styles.todoActionButton}>
                  <img onClick={()=> props.Plus(index)} src={plusIcon} alt="minus icon"/>
                </button>

              </div>
            </div>
          )
        })}
      </div>
    )
}

Todos.propTypes = {
    todos : propTypes.arrayOf(propTypes.shape({
        title : propTypes.string,
        count : propTypes.number
})),
    Minus   : propTypes.func,
    Plus    : propTypes.func


}

export default Todos