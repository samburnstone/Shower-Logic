import { connect } from "react-redux";
import { actionCreators, selectors } from "store/modules/showers";
import { RootState } from "store/types";
import List from "./List";
import { ShowersByStatus } from "types";

type StateProps = {
  showersByStatus: ShowersByStatus;
};

type DispatchProps = {
  fetchShowers: () => void;
};

const mapStateToProps = (state: RootState): StateProps => ({
  showersByStatus: selectors.getShowersByStatus(state)
});

const mapDispatchToProps: DispatchProps = {
  fetchShowers: actionCreators.fetchShowerAvailability
};

// TODO: work out how to type this
export default connect(mapStateToProps, mapDispatchToProps)(List);
