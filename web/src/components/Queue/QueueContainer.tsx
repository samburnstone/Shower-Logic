import { connect } from "react-redux";
import {
  actionCreators as queueActionCreators,
  selectors as queueSelectors
} from "store/modules/queue";
import { selectors as showerSelectors } from "store/modules/showers";
import { RootState } from "store/types";
import Queue from "./Queue";

export type StateProps = {
  isShowerAvailable: boolean;
  queueCount: number;
};

export type DispatchProps = {
  addToQueue: () => void;
};

const mapStateToProps = (state: RootState): StateProps => ({
  isShowerAvailable: showerSelectors.getIsShowerAvailable(state),
  queueCount: queueSelectors.getQueueCount(state)
});

const mapDispatchToProps: DispatchProps = {
  addToQueue: queueActionCreators.subscribeToQueueCountUpdates
};

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
