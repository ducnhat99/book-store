const NotificationHover = (props) => {
    return (
        <div className="notification--container">
            <div className="notification--container__title">
                <h4>{props.title}</h4>
            </div>
            <div className="notification--container__date">
                <p>{props.date}</p>
            </div>
            <div className="notification--container__item">
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default NotificationHover