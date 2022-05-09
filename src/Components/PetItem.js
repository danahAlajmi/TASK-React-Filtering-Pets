import react, { useState } from "react";

function PetItem({ pet }) {
  const [image, stateImage] = useState(pet.image);
  const changeImage = () => {
    stateImage(pet.image2);
  };
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={image} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button onClick={changeImage} type="button" className="btn btn-info">
            Pet
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
