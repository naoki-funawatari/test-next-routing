import Image from "@/components/Image";
import racerImage from "@/assets/images/racer.png";
import carImage from "@/assets/images/car.png";

const Driver = ({ driver }) => (
  <>
    <h2>{driver.driverName}</h2>
    <Image src={racerImage} alt="racer" />
    <Image src={carImage} alt="car" />
  </>
);

export default Driver;
