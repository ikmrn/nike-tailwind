const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl 
    ${
      bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"
    } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-32 sm:h-32 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={91}
          height={74}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
