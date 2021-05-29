import * as React from "react";
import PropTypes, { InferProps } from "prop-types";

export default function RequestUnit({
  student,
  school,
  address,
}: InferProps<typeof RequestUnit.propTypes>) {
  return (
    <div className="w-full">
      <article>
        <h3>{student.name}</h3>
        <p>{`${student.cla} ${student.sec}`}</p>
      </article>
    </div>
  );
}

RequestUnit.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    cla: PropTypes.string.isRequired,
    sec: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
  }).isRequired,
  school: PropTypes.shape({
    sch: PropTypes.string.isRequired,
    per: PropTypes.string.isRequired,
  }).isRequired,
  address: PropTypes.shape({
    address: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};
