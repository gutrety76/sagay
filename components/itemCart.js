import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItem, minusItem, removeItem } from "../slices/busketSlice";
import { motion, AnimatePresence } from "framer-motion";

export default function ItemCart({
  id,
  title,
  price,
  img,
  description,
  weight,
  width,
  height,
}) {
  const dispatch = useDispatch();
  const { count } =
    useSelector((state) =>
      state.busketSlice.items.find((obj) => obj.id === id)
    ) || 0;
  const onClickAdd = (id, title, price, img, weight) => {
    const item = {
      id,
      title,
      price,
      img,
      weight,
    };
    dispatch(addItem(item));
  };

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onRemoveItem = () => {
    dispatch(removeItem(id));
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0 }}
        className="flex relative  my-2   2xl:p-0   h-full w-full  rounded  flex-row md:flex-col items-center justify-start"
      >
        <div className="flex items-center min-h-[240px] my-auto mx-auto py-auto px-auto w-[350px] p-6 mt-1 justify-center w-[50%] md:w-full">
          <Image
            className=""
            src={img}
            alt={title}
            height={350}
            width={340}
            loader={({ src }) => `${src}?format=jpeg`}
          />
        </div>
        <div className="absolute top-[-10px] right-2 ">
          <span className="font-[400] text-[18px] text-[#CBCBCB]">
            {weight}
          </span>
        </div>
        <div className="flex flex-col items-center justify-between h-full pt-1  pr-2 w-[50%] md:w-full">
          <div className="flex  items-center  leading-9   font-normals justify-start text-center md:text-center font-normal pb-auto sm:text-[32px] text-[24px]">
            <h4>{title}</h4>
          </div>
          <p className="flex mt-4 text-center items-center  mb-auto py-0 justify-center text-[18px] text-[#868484] min-h-[50px]">
            <h5>{description}</h5>
          </p>
          <div className="flex items-center justify-between w-full md:px-2">
            <span className="md:p-3   sm:ml-0 sm:px-4 flex items-center justify-center whitespace-nowrap rounded text-[#313131] sm:text-[28px] text-[24px]">
              {price} ???
            </span>
            {count === undefined && (
              <div
                className="outline outline-2 md:py-2 outline-[#FF8932] md:my-1 whitespace-nowrap  sm:px-4 p-2 text-black  duration-75 active:scale-105 select-none  sm:py-1 flex justify-center sm:p-5 hover:text-white items-center hover:bg-[#FF8932] rounded-[90px]"
                onClick={() => onClickAdd(id, title, price, img)}
              >
                ?????????????? {count}
              </div>
            )}
            {count !== undefined && count > 0 && (
              <div className="flex w-[93px]  sm:w-[118px] items-center justify-center  border-solid border-2 select-none rounded-[180px]  border-[#FF8932] ">
                <div
                  className=" flex text-[18px] items-center  cursor-pointer justify-center py-1  w-[40px] h-[10px] px-3"
                  onClick={onClickMinus}
                >
                  -
                </div>
                <div className="bg-[#FF8932] rounded-[180px] text-white text-[18px] md:text-[22px] py-1 px-3 md:px-4">
                  {count}
                </div>
                <div
                  className=" flex text-[18px]    items-center cursor-pointer  justify-center py-1 w-[40px] h-[10px] px-3"
                  onClick={onClickPlus}
                >
                  +
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
