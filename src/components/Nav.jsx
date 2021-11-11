import Link from "@/components/link";
import teams from "@/assets/data/teams.json";

const Nav = () => (
  <nav>
    <ul>
      {teams.map(team => {
        const asUrl = `/${team.teamName}`.replace(/\s/g, "-");
        const url = `${asUrl}?teamId=${team.teamId}`;

        return (
          <li key={url}>
            <Link href={url} as={asUrl}>
              {team.teamName}
            </Link>
            <ul>
              {team.drivers.map(driver => {
                const asUrl = `/${team.teamName}/${driver.driverName}`.replace(/\s/g, "-");
                const url = `${asUrl}?teamId=${team.teamId}&driverId=${driver.driverId}`;

                return (
                  <li key={url}>
                    <Link href={url} as={asUrl}>
                      {driver.driverName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Nav;
