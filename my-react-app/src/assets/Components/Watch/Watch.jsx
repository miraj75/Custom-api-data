

const Watch = ({watch}) => {
    const {brand,price,model,features,batteryLife} =watch
    return (
        <div>
            <h3>Watche:{brand}</h3>
            <p>price:{price}</p>
            <p>Model:{model}</p>
            <p>Battery Life:{batteryLife}</p>
            <ol>
                <h3>Feature</h3>
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ol>
        </div>
    );
};

export default Watch;