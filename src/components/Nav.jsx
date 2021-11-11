import Link from "@/components/link";
import teams from "@/assets/data/teams.json";

const Nav = () => (
  <nav>
    <ul>
      {teams.map(team => {
        const url = `/${team.teamName}?teamId=${team.teamId}`.replace(/\s/g, "-");

        return (
          <li key={url}>
            <Link href={url}>{team.teamName}</Link>
            <ul>
              {team.drivers.map(driver => {
                const url =
                  `/${team.teamName}/${driver.driverName}`.replace(/\s/g, "-") +
                  `?teamId=${team.teamId}&driverId=${driver.driverId}`;

                return (
                  <li key={url}>
                    <Link href={url}>{driver.driverName}</Link>
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
