const Offer = () => {
  return (
    <div className=" w-4/5 mx-auto">
      <h2 className="text-4xl font-bold text-center">Special Offers</h2>
      <div className="">
        <h2 className="text-xl text-center font-semibold py-5">
          Get 20% off on all mystery novels!
        </h2>
        <p className="text-center text-base text-gray-700">
          Use code <strong className="text-red-400">MYSTERY20</strong> at
          checkout to redeem this offer.
        </p>
      </div>
      <div className="text-center my-10">
        <p className="text-6xl text-red-500 font-bold">25% OFF</p>
        <p className="text-xl font-semibold py-5">
          Also get 25% off all E-Books
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-600">
          <span className="font-extrabold">
            Free Shipping on Orders Over $50 :{" "}
          </span>
          Stock up on your reading list and enjoy free shipping on orders over
          $50. Explore diverse genres, indulge in captivating stories, and have
          your books delivered straight to your doorstep at no extra cost.
        </p>
        <p className="text-sm font-semibold text-gray-700 py-6">
          Hurry, these offers won&apos;t last forever! Treat yourself to
          literary delights and make the most of these special deals while they
          are still available. Happy reading from Bookish-Bliss!
        </p>
      </div>
    </div>
  );
};

export default Offer;
