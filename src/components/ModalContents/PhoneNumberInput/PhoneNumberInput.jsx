import "./phoneNumberInput.scss";

const PhoneNumberInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "");
    if (digits.length <= 10) {
      onChange(digits);
    }
  };
  return (
    <>
      <div className="PhoneNumberInput">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          className="phoneNumber"
          placeholder="Enter your phone number"
          value={value}
          onChange={handleChange}
          maxLength={10}
          autoComplete="tel"
        />
      </div>
    </>
  );
};

export default PhoneNumberInput;
