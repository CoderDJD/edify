import * as React from "react";
import PropTypes, { InferProps } from "prop-types";

export default function InputUnit({
  cb,
  text,
  value,
  placeholder,
}: InferProps<typeof InputUnit.propTypes>) {
  return (
    <input
      placeholder={placeholder}
      onChange={(e) => {
        cb({ value: e.target.value });
      }}
      value={text}
    ></input>
  );
}

InputUnit.propTypes = {
  placeholder: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

InputUnit.defaultProps = {
  placeholder: "Something",
  text: "",
};
