"use strict";

function App() {
  const [timing, setTiming] = React.useState("Daily");
  const [data, setData] = React.useState({
    work: {
      daily: [5, 7],
      weekly: [32, 36],
      monthly: [103, 128],
      color: "#FF8B64",
    },
    play: {
      daily: [1, 2],
      weekly: [10, 8],
      monthly: [23, 29],
      color: "#56C2E6",
    },
    study: {
      daily: [0, 1],
      weekly: [4, 7],
      monthly: [13, 19],
      color: "#FF5E7D",
    },
    exercice: {
      daily: [1, 1],
      weekly: [4, 5],
      monthly: [11, 18],
      color: "#4BD07F",
    },
    social: {
      daily: [1, 3],
      weekly: [5, 10],
      monthly: [21, 23],
      color: "#7235D1",
    },
    selfcare: {
      daily: [0, 1],
      weekly: [2, 2],
      monthly: [7, 11],
      color: "#F1C75B",
    },
  });
  let i = 0;
  return (
    // <div className="grid lg:grid-rows-2 lg:grid-cols-4 lg:gap-y-8 gap-y-4 justify-items-center w-4/5">
    <div className="grid lg:grid-rows-2 lg:grid-cols-4 lg:gap-y-8 gap-y-4 justify-items-center gap-x-2">
      <article className="primary bg-[#1B1F48] rounded-lg lg:w-64 lg:h-[514px] w-full lg:row-span-2">
        <div className="bg-[#5746EA] rounded-lg p-8 pr-12 lg:h-[380px] flex items-center lg:block">
          <img
            className="w-20 h-20 border-white border-solid border-2 rounded-full lg:mb-8"
            src="./images/image-jeremy.png"
            alt=""
          />
          <div className="flex flex-col justify-center ml-8 lg:flex-none lg:ml-0">
            <p className="lg:mt-4 lg:mb-4 text-gray-400">Report for</p>
            <h1 className="text-5xl font-normal text-gray-50 lg:pb-24">
              Jeremy Robson
            </h1>
          </div>
        </div>
        <div className="p-8 pt-4 pr-12 rounded-lg w-full flex justify-between lg:block">
          <h3
            className={`mb-2 hover:text-gray-300
            ${timing === "Daily" ? "text-gray-300" : "text-gray-500"}
            cursor-pointer`}
            onClick={() => setTiming("Daily")}
          >
            Daily
          </h3>
          <h3
            className={` mb-2 hover:text-gray-300
            ${timing === "Weekly" ? "text-gray-300" : "text-gray-500"}
            cursor-pointer`}
            onClick={() => setTiming("Weekly")}
          >
            Weekly
          </h3>
          <h3
            className={` mb-2 hover:text-gray-300
            ${timing === "Monthly" ? "text-gray-300" : "text-gray-500"}
            cursor-pointer`}
            onClick={() => setTiming("Monthly")}
          >
            Monthly
          </h3>
        </div>
      </article>
      {Object.keys(data).map((el) => {
        i++;
        return (
          <Card
            title={el}
            element={data[el]}
            image={el}
            key={i}
            timing={timing}
          />
        );
      })}
    </div>
  );
}
function Card(props) {
  const [title, setTitle] = React.useState(props.title);
  const [image, setImage] = React.useState(props.image);
  const [element, setElement] = React.useState(props.element);
  const [color, setColor] = React.useState(props.element.color);
  let lastTime, time;
  switch (props.timing) {
    case "Weekly":
      time = element.weekly[0];
      lastTime = element.weekly[1];
      break;
    case "Daily":
      time = element.daily[0];
      lastTime = element.daily[1];
      break;
    case "Monthly":
      time = element.monthly[0];
      lastTime = element.monthly[1];
      break;
  }
  return (
    <article
      className={`relative bg-[${color}] lg:w-64 w-full lg:h-60 h-56 rounded-lg bg-[url('./images/icon-${image}.svg')] bg-no-repeat bg-right-top`}
    >
      <div className="bg-[#1D204B] absolute top-12 lg:w-64 w-full lg:h-48 h-44 rounded-lg p-8 hover:bg-[#34397B] cursor-pointer">
        <div className="flex justify-between items-center mb-4">
          <p className="text-white capitalize">{title}</p>
          <p className="text-gray-300 font-bold leading-3">...</p>
        </div>
        <div className="flex justify-between items-center gap-2 lg:block">
          <h3 className="text-white text-5xl mb-2">{time}hrs</h3>
          <p className="text-gray-400 text-md">Last Week - {lastTime}hrs</p>
        </div>
      </div>
    </article>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
