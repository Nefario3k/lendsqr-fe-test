const Card = (prop: any) => {
    return (
        <div className="card__content col-6 col-lg-3">
            <div>
                <img src={prop.cardData.src} alt="" />
                <p>{prop.cardData.title}</p>
                <h3>{prop.cardData.value}</h3>
            </div>
        </div>
    );
};

export default Card;
