import * as React from "react";
import TextUnit from "./TextUnit";
import PropTypes, { InferProps } from "prop-types";
import { Mail, Book, Phone, Award, Percent } from "react-feather";

export default function RequestUnit({
  student,
  school,
}: InferProps<typeof RequestUnit.propTypes>) {
  return (
    <div className="flex flex-col w-full p-4 rounded-lg transition duration-200 ease-in-out bg-dark-500 hover:bg-dark-300 hover:shadow-lg">
      <section className="flex space-x-2 items-center">
        <section className="flex flex-col gap-1">
          <a href={`mailto:${student.email}`} target="_top">
            <h3 className="cursor-pointer hover:text-accent-hover">
              {student.name}
            </h3>
          </a>
          <TextUnit
            icon={<Award />}
            text={`Class : ${student.class}`}
            color="blue-400"
          />
          <TextUnit
            icon={<Percent />}
            text={`Perf : ${student.percentage}%`}
            color="green-500"
          />
          <TextUnit icon={<Mail />} text={`${student.email}`} color="red-500" />
          <TextUnit
            icon={<Phone />}
            text={`Call : ${student.phoneNum}`}
            color="accent-disabled"
          />
          <TextUnit
            icon={<Book />}
            text={`School : ${school.name}`}
            color="pink-500"
          />
          <TextUnit icon={<Mail />} text={`${school.email}`} color="blue-500" />
          <TextUnit
            icon={<Phone />}
            text={`Call : ${school.phoneNum}`}
            color="indigo-500"
          />
        </section>
      </section>
    </div>
  );
}

RequestUnit.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNum: PropTypes.string.isRequired,
  }).isRequired,
  school: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNum: PropTypes.string.isRequired,
  }).isRequired,
};

RequestUnit.defaultProps = {
  student: {
    name: "D Joshua Daniel",
    class: "8 C",
    percentage: "98",
    email: "joshua@gmail.com",
    phoneNum: "6000000000",
  },
  school: {
    name: "Delhi Public School",
    email: "info@dpscoimbatore.com",
    phoneNum: "6000000000",
  },
};
