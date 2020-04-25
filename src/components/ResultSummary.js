import React from 'react';
import Legend from './Legend';
import SummaryText from './SummaryText';
import ResultToggle from './ResultToggle';
import ResultParameters from './ResultParameters';
import ResultHistogram from './ResultHistogram';
import './ResultSummary.css';

class ResultSummary extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }
    
    handleToggleResults = () => {
        const visible = this.state.visible;
        this.setState({
            visible: !visible
        })
    }

    render () {

        if ( this.props.resultParams && this.props.resultParams.searchClimate ) {
            return (
                <div className={`result-summary ${!this.state.visible ? 'hidden' : 'visible'}`}>
                    <div className='summary-header'>
                        <div style={{marginRight: '2em'}}><b>Summary</b></div>
                        <ResultToggle
                            visible={this.state.visible}
                            handleToggle={this.handleToggleResults} />
                    </div>
                    {this.state.visible &&
                        <div className='summary-content'>
                            <div className='summary-text'>
                                <SummaryText
                                    resultParams={this.props.resultParams} />                
                                <Legend
                                    display={this.props.display}
                                    colour={this.props.colour}
                                    nSites={this.props.resultParams.nSites}
                                    minCD={this.props.resultParams.minCD}
                                    maxCD={this.props.resultParams.maxCD}
                                    handleColourChange={this.props.handleColourChange}
                                    handleDisplayChange={this.props.handleDisplayChange} />
                            </div>
                            <ResultParameters
                                resultParams={this.props.resultParams} />
                            <ResultHistogram
                                display={this.props.display}
                                colour={this.props.colour}
                                nSites={this.props.resultParams.nSites}
                                minCD={this.props.resultParams.minCD}
                                maxCD={this.props.resultParams.maxCD}
                                selectedCellCD={this.props.selectedCell.cd}
                                climateGeojson={this.props.climateGeojson} />
                        </div>
                    }
                </div>
            );
        } else {
            return (null);
        }
    }
}

export default ResultSummary;