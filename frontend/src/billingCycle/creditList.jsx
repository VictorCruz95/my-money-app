import React, { Component } from 'react'
import { Field } from 'redux-form'

import Input from '../common/form/input'
import Grid from '../common/layout/grid'

class CreditList extends Component {
    renderRows(){
        return(
            <tr>
                <td><Field name='credits[1].name' component={Input}
                    placeholder='Informe o nome' readOnly={this.props.readOnly}/></td>
                <td><Field name='credits[1].value' component={Input}
                    placeholder='Informe o valor' readOnly={this.props.readOnly}/></td>
                <td></td>
            </tr>

        )
    }

    render(){
        return(
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                </fieldset>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>                    
                </table>
            </Grid>
        )
    }
}

export default CreditList