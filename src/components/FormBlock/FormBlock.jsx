import classNames from 'classnames';
import './FormBlock.scss';

const FormBlock = ({children, className}) => {
  return (
    <div className={classNames("formblock", className)}>
      {children}
    </div>
  )
}

export default FormBlock