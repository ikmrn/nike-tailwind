import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className=" max-container flex justify-between  gap-10 items-center max-lg:flex-col"
      id="contact-us"
    >
      <h3 className="text-4xl leading[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up from
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="flex items-center w-full gap-5 p-2.5 rounded-full max-sm:flex-col  sm:border-slate-gray sm:border lg:max-w-[40%]">
        <input type="text" placeholder="subsribe@nike.com" className="input"/>
        <div className="flex items-center  max-sm:justify-end max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
