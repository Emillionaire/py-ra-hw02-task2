import Item from './ShopItem';

const ListView = (products) => {
    let keyId = 0;

    return (
        <div>
            {products.items.map((el) => {
                keyId++;
                return <Item el={el} key={keyId}/>
            })}
        </div>
    );
};

export default ListView;