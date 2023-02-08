import {ProcessCard} from './ProcessCard'
import financeIcon from 'icons/finance.svg'
import {create} from "react-test-renderer";

it("Should render ProcessCard component properly", () => {
    const component = create(<ProcessCard item={{
        id: '1',
        name: 'Finance',
        description: 'This process exmains the payroll flow within the Finanace department. This process was created for Ziv Cohen on 06.07.2021, 17:58',
        iconUrl: financeIcon
    }}/>)
    expect(component.toJSON()).toMatchSnapshot()
})
