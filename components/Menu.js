import PizzaMenu from "./PizzaMenu";
import RollsMenu from "./RollsMenu";
import { useEffect, useState } from "react";
import CardForPhoneMenu from "./CardForPhoneMenu";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

import MenuTemplateForNonFilterterd from "./MenuTemplateForNonFilterterd";

export default function Menu() {
  const [width, setWidth] = useState();

  const { typeMenuu } = useSelector((state) => state.menuSlice);
  function checkWidth() {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkWidth);
      const a = window.innerWidth;
      setWidth(a);
      return () => {
        window.removeEventListener("resize", checkWidth);
      };
    }
  }, []);
  return (
    <div className="md:p-0 mx-auto">
      <h1 className="text-white select-none">Сагай</h1>
      <h2 className="text-white select-none">Палермо</h2>
      {typeMenuu == 0 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 1000 }}
          >
            <div className=" grid  place-content-stretch grid-cols-2 grid-rows-18  gap-2">
              <CardForPhoneMenu
                altProp="Гамбургер"
                imgType="https://ik.imagekit.io/rduvru4l4/Бургеры/гамбургер.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677337545259?format=jpeg"
                click={1}
                text="Бургеры"
                bgColor="bg-[#4F85B6]"
              />
              <CardForPhoneMenu
                altProp="Роллы"
                imgType="https://ik.imagekit.io/rduvru4l4/Суши2/сет_дуэт.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677436806107?format=jpeg"
                click={2}
                text="Суши и роллы"
                bgColor="bg-[#B440DD]"
              />
              <CardForPhoneMenu
                altProp="Салаты"
                imgType="https://ik.imagekit.io/rduvru4l4/Салаты/салат_из_говядины_с_картофелем_пай.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677357217187?format=jpeg"
                click={3}
                text="Салаты"
                bgColor="bg-[#91BB5B]"
              />
              <CardForPhoneMenu
                altProp="Закуски"
                imgType="https://ik.imagekit.io/rduvru4l4/Закуски/эби_темпура.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677419942977?format=jpeg"
                click={4}
                text="Закуски"
                bgColor="bg-[#D27643]"
              />
              <CardForPhoneMenu
                altProp="Суп"
                imgType="https://ik.imagekit.io/rduvru4l4/Супы/суп_солянка.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677420901582?format=jpeg"
                click={5}
                text="Супы"
                bgColor="bg-[#DBC473]"
              />
              <CardForPhoneMenu
                altProp="Горячее блюдо"
                imgType="https://ik.imagekit.io/rduvru4l4/Горячее/медальоны_из_свинины.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677422801690?format=jpeg"
                click={6}
                text="Горячее"
                bgColor="bg-[#FFA36F]"
              />
              <CardForPhoneMenu
                altProp="Детское меню"
                imgType="https://ik.imagekit.io/rduvru4l4/%D0%94%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%B5_%D0%BC%D0%B5%D0%BD%D1%8E/%D1%80%D1%83%D0%BB%D0%B5%D1%82_%D0%B8%D0%B7_%D0%BA%D1%83%D1%80%D0%B8%D1%86%D1%8B_%D1%81_%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%84%D0%B5%D0%BB%D0%B5%D0%BC_%D1%84%D1%80%D0%B8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677358378114?format=jpeg"
                click={7}
                text="Детское меню"
                bgColor="bg-[#4F85B6]"
              />
              <CardForPhoneMenu
                altProp="Пицца"
                imgType="https://ik.imagekit.io/rduvru4l4/%D0%9F%D0%B8%D1%86%D1%86%D0%B0/%D0%BC%D0%B0%D1%80%D1%81%D0%B8%D0%BB%D1%8C%D1%8F.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677334416391?format=jpeg"
                click={8}
                text="Пицца"
                bgColor="bg-[#B440DD]"
              />
              <CardForPhoneMenu
                altProp="Десерты"
                imgType="https://ik.imagekit.io/rduvru4l4/%D0%94%D0%B5%D1%81%D0%B5%D1%80%D1%82%D1%8B/%D1%88%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4%D0%BD%D1%8B%D0%B9_%D1%87%D0%B8%D0%B7%D0%BA%D0%B5%D0%B9%D0%BA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677356217897?format=jpeg"
                click={9}
                text="Десерты"
                bgColor="bg-[#91BB5B]"
              />
              <CardForPhoneMenu
                altProp="Кофе"
                imgType="https://ik.imagekit.io/rduvru4l4/%D0%9A%D0%BE%D1%84%D0%B5/%D0%B0%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D0%BE_%D1%81_%D0%BC%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%D0%BC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677438097685?format=jpeg"
                click={10}
                text="Кофе"
                bgColor="bg-[#D27643]"
              />
              <CardForPhoneMenu
                altProp="Напитки на основе кофе"
                imgType="https://ik.imagekit.io/rduvru4l4/%D0%9D%D0%B0%D0%BF%D0%B8%D1%82%D0%BA%D0%B8_%D0%BD%D0%B0_%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B5_%D0%BA%D0%BE%D1%84%D0%B5/%D1%84%D1%80%D0%B0%D0%BF%D0%BF%D0%B5_%D1%8D%D0%BC%D0%B0%D0%BD%D1%83%D1%8D%D0%BB%D1%8C.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677460633213?format=jpeg"
                click={11}
                text="Напитки на основе кофе"
                bgColor="bg-[#DBC473]"
              />
              {/* <CardForPhoneMenu
                altProp="Горячее блюдо"
                imgType="hotcategory.png"
                click={12}
                text="чай"
                bgColor="bg-[#FFA36F]"
              /> */}
              <CardForPhoneMenu
                altProp="Свежевыжатые соки"
                imgType="https://ik.imagekit.io/rduvru4l4/Свеж_Соки/витамин_с.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677536809659?format=jpeg"
                click={13}
                text="Свежевыжатые соки"
                bgColor="bg-[#4F85B6]"
              />
              {/* <CardForPhoneMenu
                altProp="Роллы"
                imgType="rollspng.png"
                click={14}
                text="Соки"
                bgColor="bg-[#B440DD]"
              />
              <CardForPhoneMenu
                altProp="Салаты"
                imgType="salats.png"
                click={15}
                text="Газированные напитки"
                bgColor="bg-[#91BB5B]"
              /> */}
              <CardForPhoneMenu
                altProp="Фирменные безалкогольные напитки"
                imgType="https://ik.imagekit.io/rduvru4l4/Фирменные_безалко_коктейли/пеликан.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677460675543?format=jpeg"
                click={16}
                text="Фирменные безалкогольные напитки"
                bgColor="bg-[#D27643]"
              />
              <CardForPhoneMenu
                altProp="Лимонады"
                imgType="https://ik.imagekit.io/rduvru4l4/Лимонады/малиновый_лимонад.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677460726758?format=jpeg"
                click={17}
                text="Лимонады"
                bgColor="bg-[#DBC473]"
              />
              <CardForPhoneMenu
                altProp="Молочные шейки"
                imgType="https://ik.imagekit.io/rduvru4l4/Молочный_шейк/мульти_шейк.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677460755934?format=jpeg"
                click={18}
                text="Молочные шейки"
                bgColor="bg-[#FFA36F]"
              />
              <CardForPhoneMenu
                altProp="Смузи"
                imgType="https://ik.imagekit.io/rduvru4l4/Смузи/бодрая_клюква.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677460776159?format=jpeg"
                click={19}
                text="Смузи"
                bgColor="bg-[#4F85B6]"
              />
              {/* <CardForPhoneMenu
                altProp="Роллы"
                imgType="rollspng.png"
                click={20}
                text="Мороженное"
                bgColor="bg-[#B440DD]"
              /> */}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      {typeMenuu == 1 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="BurgersMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={1}
                nameForMenu={`Бургеры`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 2 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="RollsMenu">
              <RollsMenu />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 3 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="SalatMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={3}
                nameForMenu={`Салаты`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 4 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="FionceMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={4}
                nameForMenu={`Закуски`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 5 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="SoapMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={5}
                nameForMenu={`Супы`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 6 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="HotMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={6}
                nameForMenu={`Горячее`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 7 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="KidsMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={7}
                nameForMenu={`Детское меню`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 8 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="PizzaMenu">
              <PizzaMenu />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 9 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="DesetMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={9}
                nameForMenu={`Десерты`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 10 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="CofeMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={10}
                nameForMenu={`Кофе`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 11 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="DrinksOnCofeMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={11}
                nameForMenu={`Напитки на основе кофе`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 12 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="TeaMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={12}
                nameForMenu={`Чай`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 13 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="FreshJuicyMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={13}
                nameForMenu={`Свежевыжатые соки`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 14 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="JuicyMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={14}
                nameForMenu={`Соки`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 15 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="FizzyMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={15}
                nameForMenu={`Газированные напитки`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 16 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="NonAlcoholMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={16}
                nameForMenu={`Фирменные безалкогольные коктейли`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 17 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="LemonadesMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={17}
                nameForMenu={`Лимонады`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 18 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="MilkShakeMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={18}
                nameForMenu={`Молочные шейки`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 19 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="SmizyMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={19}
                nameForMenu={`Смузи`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {typeMenuu == 20 && width < 768 && (
        <AnimatePresence>
          {" "}
          <motion.div
            initial={{ opacity: 0, x: -1000 }}
            transition={{
              duration: 0.5,
              type: "tween",
            }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
          >
            <div name="IceCreamMenu">
              <MenuTemplateForNonFilterterd
                typeForProducts={20}
                nameForMenu={`Мороженное`}
              />
            </div>
          </motion.div>{" "}
        </AnimatePresence>
      )}
      {width > 768 && (
        <>
          <div name="BurgersMenu">
            <MenuTemplateForNonFilterterd
              typeForProducts={1}
              width={340}
              height={350}
              nameForMenu={`Бургеры`}
            />
          </div>
          <div name="RollsMenu">
            <RollsMenu />
          </div>
          <div name="SalatMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={3}
              nameForMenu={`Салаты`}
            />
          </div>
          <div name="FionceMenu">
            <MenuTemplateForNonFilterterd
              typeForProducts={4}
              height={350}
              width={340}
              nameForMenu={`Закуски`}
            />
          </div>
          <div name="SoapMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={5}
              nameForMenu={`Супы`}
            />
          </div>
          <div name="HotMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={6}
              nameForMenu={`Горячее`}
            />
          </div>
          <div name="KidsMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={7}
              nameForMenu={`Детское меню`}
            />
          </div>
          <div name="PizzaMenu">
            <PizzaMenu />
          </div>
          <div name="DesetMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={9}
              nameForMenu={`Десерты`}
            />
          </div>
          <div name="CofeMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={10}
              nameForMenu={`Кофе`}
            />
          </div>
          <div name="DrinksOnCofeMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={11}
              nameForMenu={`Напитки на основе кофе`}
            />
          </div>
          <div name="TeaMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={12}
              nameForMenu={`Чай`}
            />
          </div>
          <div name="FreshJuicyMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={13}
              nameForMenu={`Свежевыжатые соки`}
            />
          </div>
          <div name="JuicyMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={14}
              nameForMenu={`Соки`}
            />
          </div>
          <div name="FizzyMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={15}
              nameForMenu={`Газированные напитки`}
            />
          </div>
          <div name="NonAlcoholMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={16}
              nameForMenu={`Фирменные безалкогольные коктейли`}
            />
          </div>
          <div name="LemonadesMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={17}
              nameForMenu={`Лимонады`}
            />
          </div>
          <div name="MilkShakeMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={18}
              nameForMenu={`Молочные шейки`}
            />
          </div>
          <div name="SmizyMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={19}
              nameForMenu={`Смузи`}
            />
          </div>
          <div name="IceCreamMenu">
            <MenuTemplateForNonFilterterd
              width={340}
              height={350}
              typeForProducts={20}
              nameForMenu={`Мороженное`}
            />
          </div>
        </>
      )}
    </div>
  );
}
