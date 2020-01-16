import { connect } from "react-redux";
import { selectors } from "store/modules/showers";
import { RootState } from "store/types";
import List, { Props } from "./List";

const mapStateToProps = (state: RootState): Props => ({
  showersByStatus: selectors.getShowersByStatus(state)
});

export default connect(mapStateToProps)(List);
