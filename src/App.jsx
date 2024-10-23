
import './App.css'
import Container from './componentes/Container'
import Flex from './componentes/Flex'
import Image from './componentes/Image'
import Menu from './componentes/Menu'
import Logo from '../src/assets/Logo.png'
import sweater from '../src/assets/Sweater.png'
import jeans from '../src/assets/jeans.png'
import Baskets from '../src/assets/Baskets.png'
import Banner from '../src/assets/Banner.png'
import product_one from '../src/assets/product_one.png'
import product_two from '../src/assets/product_two.png'
import counter from '../src/assets/counter.png'
import Button from './componentes/Button'
import Heading from './componentes/Heading'
import { IoMdStar } from "react-icons/io";

function App() {
  

  return (
    <>
          {/* header part start */}
    <div className="bg-headerBg py-5">
      <Container>
        <Flex>
         <div className="w-[10%]">
          <Image imgsrc={Logo}/>
         </div>
         <div className="w-[60%] pt-4">
          <Flex className={"justify-center gap-x-6 "}>
          <Menu menuName={"Men"} classname={'font-pop font-semibold text-2xl'}/>
          <Menu menuName={"Woman"} classname={'font-pop font-semibold text-2xl'}/>
          <Menu menuName={"Kids"} classname={'font-pop font-semibold text-2xl'}/>
          <Menu menuName={"Collection"} classname={'font-pop font-semibold text-2xl'}/>
          <Menu menuName={"Trends"} classname={'font-pop font-semibold text-2xl'}/>
          </Flex>
         </div>

          <div className="w-[30%]">
            <Button btnName={"Login"} className={'py-[15px] px-[30px] drop-shadow-xl mr-2 border border-btnBdr hover:bg-btnHover hover:rounded-xl'}/>
            <Button btnName={"SignUp"} className={'py-[15px] px-[30px] drop-shadow-xl border border-btnBdr hover:bg-btnHover hover:rounded-xl'}/>
          </div>
        </Flex>
      </Container>
    </div>
    {/* header part End */}

    
  {/* banner part start  */}
  <div className="bg-headerBg py-[115px]">
    <Container>
      <Flex>
        <div className="w-1/2">
        <Heading as={'h1'} text={"Find The Best Fashion Style For You"} className={"font-pop font-semibold text-[64px] pr-48"}/>
        <Heading as={'p'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "} className={"font-pop  text-[22px]  leading-9 pr-56 py-5"}/>
        <Button btnName={"Shop Nom"} className={'py-5 px-14 bg-black text-white rounded-xl uppercase mt-[40px] '}/>
        </div>
        <div className="w-1/2">
        <Image imgsrc={Banner}/>
        </div>
      </Flex>
    </Container>
  </div>
  {/* banner part End  */}


  {/* Collection part start  */}
      <div className="py-96">
        <Container>
          <Heading as='h3' text={'New Collection'} className={'font-Frank font-bold text-[64px] text-center pb-[130px]'} />
          <Flex className={'justify-between'}>
            <div className="w-[350px] rounded-xl relative">
              <Image imgsrc={sweater}/>
              <Button btnName={"sweater"} className={'bg-white rounded-xl py-2 px-32 absolute left-1/2 bottom-7 -translate-x-1/2'}/>
            </div>
            <div className="w-[355px] rounded-xl relative">
              <Image imgsrc={jeans}/>
              <Button btnName={"jeans"} className={'bg-white rounded-xl py-2 px-32 absolute left-1/2 bottom-7 -translate-x-1/2'}/>
            </div>
            <div className="w-[396px] rounded-xl relative">
              <Image imgsrc={Baskets}/>
              <Button btnName={"Baskets"} className={'bg-white rounded-xl py-2 px-36 absolute left-1/2 bottom-7 -translate-x-1/2'}/>
            </div>
          </Flex>
        </Container>

      </div>

  {/* Collection part start  */}

  {/* counter part start  */}
    <div className="py-6 relative">
      <Container>
        <Flex>
          <div className="w-1/2">
          <Image imgsrc={counter} className={'w-full'}/>
          </div>
          <div className="w-1/2 pl-24">
          <Heading as={'h1'} text={"Best Fashion Since 2010"} className={"font-Frank font-bold text-[64px] pr-32"}/>
        <Heading as={'p'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra.  "} className={"font-pop  text-[24px] font-semibold leading-9 pr-24 py-5"}/>
          </div>
        </Flex>

        <div className="w-[790px] bg-counterBg rounded-lg p-20 text-center -bottom-[170px] right-[18px] -z-10 absolute">
          <Flex className={'justify-between'}>
            <div className="w-1/3 border-r-2 border-black">
            <Heading as={'h3'} text={'2010'} className={'font-Podkova font-bold text-[64px]'}/>
            <Heading as={'h4'} text={'Founded'} className={'font-pop font-medium text-[28px]'} />
            </div>
            <div className="w-1/3 border-r-2 border-black">
            <Heading as={'h3'} text={'5000+'} className={'font-Podkova font-bold text-[64px]'}/>
            <Heading as={'h4'} text={'Product Sold'} className={'font-pop font-medium text-[28px]'} />
            </div>
            <div className="w-1/3">
            <Heading as={'h3'} text={'4500+'} className={'font-Podkova font-bold text-[64px]'}/>
            <Heading as={'h4'} text={'Best Reviews'} className={'font-pop font-medium text-[28px]'} />
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  {/* counter part End  */}

    {/* product part start  */}
      <div className="py-5 bg-productBg mt-[300px]">
        <Container>
          <Flex className={'justify-center'}>
            <div className="w-1/3">
            <Heading as={'h1'} text={"Best Seller Product"} className={"font-Frank font-bold text-[64px]  text-white"}/>
        <Heading as={'p'} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."} className={"font-Frank text-bold  text-[24px]  leading-9 pr-[45px] py-5 text-white"}/>
        <Button btnName={"Learn MORE"} className={'py-5 px-14 bg-black text-white rounded-xl font-semibold font-pop mt-[40px] text-[24px] '}/>
            </div>
            <div className="w-1/3 mx-3 ">
            <Image imgsrc={product_one} className={'w-full'}/>
           <div className="bg-white px-4 py-3">
            <Flex>
            <IoMdStar className='text-iconBg' />
            <IoMdStar className='text-iconBg' />
            <IoMdStar className='text-iconBg' />
            <IoMdStar className='text-iconBg' />
            <IoMdStar className='text-iconBg' />
            </Flex>
            <Heading as={'h3'} text={'Sweater Shirt'} className={'font-pop font-semibold text-[22px]'}/>
            <Flex>
            <Heading as={'p'} text={'$45.99'} className={'font-pop text-[24px] text-textBg '}/>
            <Heading as={'p'} text={'$35.99'} className={'font-pop  text-[24px] pl-10'}/>
            </Flex>
          
           </div>
            </div>
            <div className="w-1/3 mx-3">
            <Image imgsrc={product_two} className={'w-full'}/>
           <div className="bg-white px-4 py-3">
            <Flex>
            <IoMdStar className='text-iconBg' />
            <IoMdStar className='text-iconBg' />
            <IoMdStar className='text-iconBg' />
            <IoMdStar className='text-iconBg' />
            <IoMdStar className='text-iconBg' />
            </Flex>
            <Heading as={'h3'} text={'Pants fashion'} className={'font-pop font-semibold text-[22px]'}/>
            <Flex>
            <Heading as={'p'} text={'$55'} className={'font-pop text-[24px] text-textBg '}/>
            <Heading as={'p'} text={'$44.99'} className={'font-pop  text-[24px] pl-10'}/>
            </Flex>
          
           </div>
            </div>
          </Flex>
        </Container>
      </div>

    {/* product part end  */}

    </>
  )
}


export default App






