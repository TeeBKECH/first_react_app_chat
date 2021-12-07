import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ruLocale from 'date-fns/locale/ru';
import classNames from "classnames";

import readedSvg from '../../assets/img/readed.svg';
import notreadedSvg from '../../assets/img/not-readed.svg';

import './Message.scss';

const Message = ({ user, text, avatar, date, isMe, isReaded }) => {
    return (
    <div className={classNames("message", {"message--isme" : isMe})}>
      <div className="message__half">
        <div className="message__avatar">
          <img src={avatar} alt={`avatar ${user.fullName}`} />
        </div>
      </div>
      <div className="message__half">
        <div className={classNames("message__content", {"message__content--isme" : isMe})}>
          <div className="message__content-text">
            <p>{text}</p>
            {isMe && isReaded ? (
              <div className="message__readed">
                <img src={readedSvg} alt="readed icon" />
              </div> 
            ) : '' }
            {isMe && !isReaded ? ( 
              <div className="message__readed">
                <img src={notreadedSvg} alt="readed icon" />
              </div> 
            ) : ''}
          </div>
          <div className="message__content-attachments">

          </div>
          <div className="message__content-time">
            <span>{formatDistanceToNow(new Date(date), {locale: ruLocale, addSuffix: true })}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Message.defaultProps = {
  user: {}
}

Message.propTypes = {
  text: PropTypes.string,
  avatar: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
}

export default Message