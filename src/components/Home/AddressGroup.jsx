import './AddressGroup.scss';

const AddressGroup = () => {
  return (
    <section className="p-3 address-group-area">
      <div className="d-flex flex-column">
        <div>
          <span className="mfb-address font-LufgaBold t-14 d-flex justify-content-center p-2 text-white">
            MFB Contract：0xf12...e3c2a3E735
          </span>
        </div>
        <div>
          <span className="gold-address  font-LufgaBold t-14 d-flex justify-content-center p-2 text-white">
            Gold Contract：0x63E...8aFe0BD9EB
          </span>
        </div>
      </div>
    </section>
  );
};

export default AddressGroup;
