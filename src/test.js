                          <p>
                            {JSON.parse(el.sp).reduce((total, item) => {
                              return total + JSON.parse(item.num);
                            }, 0) +
                              JSON.parse(el.dp).reduce((total, item) => {
                                return total + JSON.parse(item.num);
                              }, 0) +
                              JSON.parse(el.tp).reduce((total, item) => {
                                return total + JSON.parse(item.num);
                              }, 0) +
                              JSON.parse(el.single).reduce((total, item) => {
                                return total + JSON.parse(item.num);
                              }, 0)}
                          </p>