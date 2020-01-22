import { connect } from "react-redux";
import {
  actionCreators as queueActionCreators,
  selectors as queueSelectors
} from "store/modules/queue";
import { selectors as showerSelectors } from "store/modules/showers";
import { UpdateStatus } from "store/modules/queue/types";
import { RootState } from "store/types";
import Queue from "./Queue";

export type StateProps = {
  isShowerAvailable: boolean;
  queueStatus?: UpdateStatus;
};

export type DispatchProps = {
  addToQueue: () => void;
};

const mapStateToProps = (state: RootState): StateProps => ({
  isShowerAvailable: showerSelectors.getIsShowerAvailable(state),
  queueStatus: queueSelectors.getQueueStatus(state)
});

const mapDispatchToProps: DispatchProps = {
  addToQueue: queueActionCreators.subscribeToQueueCountUpdates
};

export default connect(mapStateToProps, mapDispatchToProps)(Queue);
