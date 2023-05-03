import { Store } from '../core/core'

const store = new Store({
  genres: [
    {
      name: 'No Thanks',
      code: 'genre_00'
    },
    {
      name: 'Action',
      code: 'genre_01'
    },
    {
      name: 'Animation',
      code: 'genre_02'
    },
    {
      name: 'Drama',
      code: 'genre_03'
    },
    {
      name: 'Science Fiction',
      code: 'genre_04'
    },
    {
      name: 'Romance',
      code: 'genre_05'
    }
  ],
  genreName: '',
  genreArr: [],
  pick: [
    'tt0265086', //블랙호크다운
    'tt2713180', //퓨리
    'tt6924650', //미드웨이
    'tt8579674', //1917
    'tt1631867', //엣지오브투모로우
    'tt3659388', //마션
    'tt1136608', //디스트릭트9
    'tt2239822', //발레리안:천개행성의도시
    'tt5580390', //더셰입오브워터,
    'tt16360006', //버블
    'tt0347618', //고양이의보은
    'tt0347149' //하울의움직이는성
  ],
  actions: [
    'tt0265086', //블랙호크다운
    'tt2713180', //퓨리
    'tt6924650', //미드웨이
    'tt8579674', //1917
    'tt6334354', //수어사이트스쿼드
    'tt2802144', //킹스맨
    'tt1905041', //분노의질주6
    'tt1631867', //엣지오브투모로우
    'tt1375666', //인셉션
    'tt0816711', //월드워z
    'tt2911666', //존윅
    'tt1392190' //매드맥스
  ],
  drame: [
    'tt0923714', //해바라기
    'tt22872370', //동감
    'tt10276054', //항거
    'tt12663772', //이상한나라의수학자
    'tt1937339', //써니
    'tt9602258', //말모이
    'tt5799928', //동주
    'tt6878038', //택시운전사
    'tt6914542', //마약왕
    'tt14371900', //자산어보
    'tt6434022', //당신거기있어줄래요
    'tt3153634' //소원
  ],
  sf: [
    'tt0816692', //인터스텔라
    'tt3659388', //마션
    'tt1454468', //그래비티
    'tt1798709', //그녀(her)
    'tt1136608', //디스트릭트9
    'tt1160419', //듄
    'tt1677720', //레디플레이어원
    'tt2239822', //발레리안:천개행성의도시
    'tt1375666', //인셉션
    'tt2543164', //컨텍트
    'tt0133093', //매트릭스
    'tt0470752' //엑스마키나
  ],
  romance: [
    'tt5580390', //더셰입오브워터,
    'tt2337981', //건축학개론
    'tt16303830', //연애빠진로맨스
    'tt12477480', //헤어질결심
    'tt0293715', //엽기적인그녀
    'tt2194499', //어바웃타임
    'tt3783958', //라라랜드
    'tt4273886', //뷰티인사이드
    'tt2674426', //미비포유
    'tt1638002', //러브로지
    'tt2582846', //안녕헤이즐
    'tt1980929' //비긴어게인
  ],
  animation: [
    'tt16428256', //스즈메의문단속
    'tt11032374', //귀칼
    'tt0347149', //하울의움직이는성
    'tt5311514', //너의이름은
    'tt0347618', //고양이의보은
    'tt1623674', //짱구는못말려
    'tt0808506', //시간을달리는소녀
    'tt9426210', //날씨의아이
    'tt16360006', //버블
    'tt2591814', //언어의정원
    'tt5323662', //목소리의형태
    'tt15494038' //표류단지
  ]
})

export default store

export const getGenre = selectedgenre => {
  switch (selectedgenre) {
    case 'genre_00':
      store.state.genreName = ''
      store.state.genreArr = store.state.pick
      break
    case 'genre_01':
      store.state.genreName = 'Action'
      store.state.genreArr = store.state.actions
      break
    case 'genre_02':
      store.state.genreName = 'Animation'
      store.state.genreArr = store.state.animation
      break
    case 'genre_03':
      store.state.genreName = 'Drama'
      store.state.genreArr = store.state.drame
      break
    case 'genre_04':
      store.state.genreName = 'SF'
      store.state.genreArr = store.state.sf
      break
    case 'genre_05':
      store.state.genreName = 'Romance'
      store.state.genreArr = store.state.romance
      break
  }
}
