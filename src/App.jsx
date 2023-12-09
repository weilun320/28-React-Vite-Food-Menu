import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function Allergen({ allergenInfo }) {
  return (
    allergenInfo.map(allergen => (
      <>
        <div className={`col-auto rounded-circle bg-${allergen.background}`}></div>
        {allergen.info && (
          <div className="col-auto text-light">{allergen.info}</div>
        )}
      </>
    ))
  );
}

function Image({ image }) {
  return (
    <img alt={image.alt} className={image.class} height={image.height} src={image.src} width={image.width} />
  );
}

function NutritionalInfo({ nutritionInfo }) {
  return (
    <div>
      <p className="mb-1">Calories: {nutritionInfo.calories} kcal</p>
      <p className="mb-1">Protein: {nutritionInfo.protein} g</p>
      <p className="mb-1">Carbs: {nutritionInfo.carbs} g</p>
      <p className="mb-1">Fat: {nutritionInfo.fat} g</p>
    </div>
  );
}

function MenuItem({ name, price, allergenInfo, nutritionInfo, image }) {
  return (
    <>
      <div className="row bg-warning-subtle m-3 mb-5 rounded-3 overflow-hidden">
        <div className="col-12 col-xl-4 p-0">
          <Image image={image} />
        </div>
        <div className="col-12 col-xl-8 p-2">
          <p className="fs-5 mb-2">
            <strong>{name}</strong> | {price}
          </p>
          <div className="row ms-1 mb-3">
            <Allergen allergenInfo={allergenInfo} />
          </div>
          <NutritionalInfo nutritionInfo={nutritionInfo} />
        </div>
      </div>
    </>
  );
}

function Category({ title, foods }) {
  return (
    <div className="col-lg-6">
      <h2 className="text-light px-3">{title}</h2>
      {foods}
    </div>
  );
}

function Footer() {
  return (
    <>
      <div className="text-center text-light">
        &copy; 2023 Wei Lun. All right reserved.
      </div>
    </>
  );
}

const allergenInfo = [
  { background: "info", info: "Halal" },
  { background: "warning", info: "Egg" },
  { background: "danger", info: "Milk" },
  { background: "success", info: "Sesame" },
];

const friedChicken = (
  <>
    <MenuItem
      name={"2pc Fried Chicken Set"}
      price={"RM 10.00"}
      allergenInfo={[
        { background: "info p-2 me-2", info: "" },
        { background: "success p-2 me-2", info: "" }
      ]}
      nutritionInfo={{
        calories: 540,
        protein: 31,
        carbs: 35,
        fat: 29
      }}
      image={{
        alt: "Fried Chicken",
        class: "card-img object-fit-cover",
        height: 200,
        src: "./assets/fried-chicken.jpg",
        width: 200
      }}
    />
    <MenuItem
      name={"6 piece nugget"}
      price={"RM 6.00"}
      allergenInfo={[
        { background: "info p-2 me-2", info: "" }
      ]}
      nutritionInfo={{
        calories: 270,
        protein: 13,
        carbs: 16,
        fat: 16
      }}
      image={{
        alt: "Nuggets",
        class: "card-img object-fit-cover",
        height: 200,
        src: "./assets/nugget.jpg",
        width: 200
      }}
    />
  </>
);

const desserts = (
  <>
    <MenuItem
      name={"Ice Cream"}
      price={"RM 5.00"}
      allergenInfo={[
        { background: "info p-2 me-2", info: "" },
        { background: "danger p-2 me-2", info: "" }
      ]}
      nutritionInfo={{
        calories: 207,
        protein: 2,
        carbs: 33,
        fat: 6
      }}
      image={{
        alt: "Ice Cream",
        class: "card-img object-fit-cover",
        height: 200,
        src: "./assets/ice-cream.jpg",
        width: 200
      }}
    />
    <MenuItem
      name={"Apple Pie"}
      price={"RM 2.00"}
      allergenInfo={[
        { background: "info p-2 me-2", info: "" },
        { background: "warning p-2 me-2", info: "" }
      ]}
      nutritionInfo={{
        calories: 270,
        protein: 1,
        carbs: 43,
        fat: 10
      }}
      image={{
        alt: "Apple Pie",
        class: "card-img object-fit-cover",
        height: 200,
        src: "./assets/apple-pie.jpg",
        width: 200
      }}
    />
  </>
);

function App() {

  return (
    <>
      <div className="p-3 p-lg-5">
        <div className="container text-center mb-4">
          <a href="#">
            <Image image={{
              alt: "Wei Lun's Diner",
              class: "object-fit-contain mb-4",
              height: 100,
              src: "./assets/logo.png",
              width: 200
            }}
            />
          </a>
          <div className="row justify-content-center">
            <Allergen allergenInfo={allergenInfo} />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <Category title={"Fried Chicken"} foods={friedChicken} />
            <Category title={"Desserts"} foods={desserts} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App
