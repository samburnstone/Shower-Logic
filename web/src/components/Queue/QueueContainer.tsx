import { connect } from "react-redux";
import { selectors as queueSelectors } from "store/modules/queue";
import { selectors as showerSelectors } from "store/modules/showers";
import { RootState } from "store/types";
import Queue, { Props } from "./Queue";

const mapStateToProps = (state: RootState): Props => ({
  isShowerAvailable: showerSelectors.getIsShowerAvailable(state),
  queueCount: queueSelectors.getQueueCount(state)
});

export default connect(mapStateToProps)(Queue);
