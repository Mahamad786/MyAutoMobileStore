import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './popup.css';

export default class PopUp extends Component {

    render() {

        return (
            <div >
                <Dialog
                    open={this.props.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    id="popup"
                >
                    <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {this.props.message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {this.props.continue &&
                            <Button onClick={this.props.handleContinue} color="primary">
                                Continue
                           </Button>
                        }

                        <Button onClick={this.props.handleClose} color="primary">
                            {this.props.cancel ? "Cancel" : "Ok"}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }

}
