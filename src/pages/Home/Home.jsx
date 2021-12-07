import React from 'react';
import { Message } from '../../components';

import './Home.scss';

const Home = () => {

  return (
    <section className="home">
      <Message 
      avatar="https://sun4-15.userapi.com/s/v1/if1/YW7bmdCLUZBQsJ75D3EdgBzcPpWyYhyoNpWAZCEvDSVj7f-6orIS08IRO9MR1cpD3zrmomjQ.jpg?size=100x100&quality=96&crop=2,2,2154,2154&ava=1"
      text="Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты."
      date="Tue Dec 07 2021 17:16:49"
      />
      <Message 
      avatar="https://sun4-11.userapi.com/s/v1/if1/myY-wE5N7V49rjCMLeV3Q7X9QDXCerR2OitrZGJTbyWXR6IGHjnI_OjjXkSZNbb5_40g2DSg.jpg?size=200x200&quality=96&crop=23,0,720,720&ava=1"
      text="Привет"
      date="Tue Dec 07 2021 17:16:49"
      isMe={true}
      isReaded={true}
      />

    </section>
  )
}

export default Home