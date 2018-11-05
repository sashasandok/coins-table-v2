import { configure, mount, shallow, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

mount.global = mount
shallow.global = shallow
render.global = render
