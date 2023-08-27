import styles from './ShopCard.module.css';

const Card = (props) => {
    const { el, keyId } = props;

    return (
        <div key={keyId} className={styles.card}>
            <img src={el.img} className={styles.img}/>
            <div>{el.name}</div>
            <div>{el.color}</div>
            <div>${el.price}</div>
            <button>ADD TO CART</button>
        </div>
    );
};

export default Card;